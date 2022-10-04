define("UsrDecimalOutputPage", [], function() {
	return {
		entitySchemaName: "",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Button-705c591a362d448bb1d45634ab6d7ed8",
				"values": {
					"itemType": 5,
					"id": "1efa815a-a9f1-4007-a01d-953b268bd52c",
					"style": "green",
					"tag": "Button1",
					"caption": {
						"bindTo": "Resources.Strings.Button1ButtonCaption"
					},
					"click": {
						"bindTo": "onSaveButtonClick"
					},
					"enabled": true
				},
				"parentName": "ProcessActionButtons",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Button-615725da65ac4258b092211ead26a597",
				"values": {
					"itemType": 5,
					"id": "94a442f8-5030-4a49-9058-b3545bdf2d3e",
					"style": "green",
					"tag": "Button2",
					"caption": {
						"bindTo": "Resources.Strings.Button2ButtonCaption"
					},
					"click": {
						"bindTo": "onSaveButtonClick"
					},
					"enabled": true
				},
				"parentName": "ProcessActionButtons",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FLOAT6236bf7e-26bf-4fc3-84a5-6064bd3b454f",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 7,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrFloat1",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "NewTab1",
				"values": {
					"order": 0
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
