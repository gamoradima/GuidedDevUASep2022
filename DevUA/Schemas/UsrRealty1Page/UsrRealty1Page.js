define("UsrRealty1Page", ["RightUtilities"], function(RightUtilities) {
	return {
		entitySchemaName: "UsrRealty",
		attributes: {
			"CanChangePriceAttr": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				value: false
			},
			"CommissionUSD": {
				type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				dataValueType: Terrasoft.DataValueType.FLOAT,
				value: 0,
                dependencies: [
                    {
                        /* Значение колонки [CommissionUSD] зависит от значений колонок [UsrPriceUSD] и [UsrOfferType]. */
                        columns: ["UsrPriceUSD", "UsrOfferType"],
                        /* Метод-обработчик, который вызывается при изменении значения одной из колонок [UsrPriceUSD] и [UsrOfferType]. */
                        methodName: "calculateCommission"
                    }
                ]
			},
			"UsrOfferType": {
				lookupListConfig: {
					columns: ["UsrCommissionCoeff"]
				}
			},
			"UsrManager": {
                "dataValueType": Terrasoft.DataValueType.LOOKUP,
                "lookupListConfig": {
                    "filters": [
                        function() {
                            var filterGroup = Ext.create("Terrasoft.FilterGroup");
                            /* Добавляет фильтр "IsActive" в результирующую коллекцию фильтров.
                            Выбирает все записи из корневой схемы [Contact], к которой присоединена колонка [Active] из схемы [SysAdminUnit], для которых Active=true. */
                            filterGroup.add("IsActive",
                                Terrasoft.createColumnFilterWithParameter(
                                    Terrasoft.ComparisonType.EQUAL,
                                    "[SysAdminUnit:Contact:Id].Active",
                                    true));
							filterGroup.add("Is25YO_or_older",
                                Terrasoft.createColumnFilterWithParameter(
                                    Terrasoft.ComparisonType.GREATER_OR_EQUAL,
                                    "Age",
                                    25));
                            return filterGroup;
                        }
                    ]
                }
			}
		},

		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrRealtyFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrRealty"
				}
			},
			"UsrSchema7d6e948fDetail4d6ed224": {
				"schemaName": "UsrRealtyVisitPageDetailGrid",
				"entitySchemaName": "UsrRealtyVisit",
				"filter": {
					"detailColumn": "UsrParentRealty",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrComment": {
				"14f96c77-6983-467d-8103-6ccc438b0f9b": {
					"uId": "14f96c77-6983-467d-8103-6ccc438b0f9b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 7,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrPriceUSD"
							},
							"rightExpression": {
								"type": 0,
								"value": 1000,
								"dataValueType": 5
							}
						}
					]
				}
			},
			"UsrPriceUSD": {
				"6677f5b4-ed5e-401f-b941-96672a427395": {
					"uId": "6677f5b4-ed5e-401f-b941-96672a427395",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "CanChangePriceAttr"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
            setValidationConfig: function() {
                /* Call the initialization of the parent view model's validators. */
                this.callParent(arguments);
                this.addColumnValidator("UsrPriceUSD", this.positiveValueValidator);
                this.addColumnValidator("UsrArea", this.positiveValueValidator);
            },

			positiveValueValidator: function(value, column) {
				var msg = "";
				if (value < 0) {
					msg = this.get("Resources.Strings.ValueMustBeGreaterThanZero");
				}
				return {
					invalidMessage: msg
				};
			},
			
			calculateCommission: function() {
				var price = this.get("UsrPriceUSD");
				if (!price) {
					price = 0;
				}
				var offerTypeObject = this.get("UsrOfferType");
				var coeff = 0;
				if (offerTypeObject) {
					coeff = offerTypeObject.UsrCommissionCoeff;
				}
				var result = coeff * price;
				this.set("CommissionUSD", result);
				
			},
			onEntityInitialized: function() {
				this.callParent(arguments);
				this.setSecurityAttribute();
				this.calculateCommission();
			},
			setSecurityAttribute: function() {
				RightUtilities.checkCanExecuteOperation({
					operation: "CanChangePrice"
				}, this.getPriceOperationResult, this);
			},
			getPriceOperationResult: function(result) {
				this.set("CanChangePriceAttr", result);
			},

			onMyButtonClick: function() {
				this.console.log("Кнопка ПЫЩЬ нажата!");
				this.showInformationDialog("Кнопка ПЫЩЬ действительно нажата!");
				var managerObject = {
					value: "acd901cf-0f0f-423a-9cd9-f093bb8f1670",
					displayValue: "Джаедонг"
				};
				this.set("UsrManager", managerObject);
			},
			getMyButtonEnabled: function() {
				var result = true;
				var name = this.get("UsrName");
				if (!name) {
					result = false;
				}
				return result;
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrNamec2df041b-dcc6-4cca-8a8c-3a58f51a834f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOAT5c7e4059-8f2b-4381-ad32-3fea4f34ce21",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrPriceUSD",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOAT9beba808-0907-42b4-a46c-8f0610ccdc7c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrArea",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CommissionControl",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "CommissionUSD",
					"enabled": false,
					"caption": {
						"bindTo": "Resources.Strings.CommissionCaption"
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "MyButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyButtonCaption"
					},
					"click": {
						"bindTo": "onMyButtonClick"
					},
					"enabled": {
						"bindTo": "getMyButtonEnabled"
					},
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"style": "red"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP4331ceea-d7ed-463c-beee-4dee7bae88cd",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP150981f0-dfa3-4707-ae45-7a1b977f18c8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrOfferType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING99dd3f9f-a437-4669-b9b9-455b13664234",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 2,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrComment",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP3d6a0169-3e21-4514-b29e-623aebdae842",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrManager",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabPereglyad",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabPereglyadTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrSchema7d6e948fDetail4d6ed224",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabPereglyad",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
