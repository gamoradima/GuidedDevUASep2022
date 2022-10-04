﻿namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrCalcAveragePriceProcessMethodsWrapper

	/// <exclude/>
	public class UsrCalcAveragePriceProcessMethodsWrapper : ProcessModel
	{

		public UsrCalcAveragePriceProcessMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrRealty");
			var priceColumn = esq.AddColumn("UsrPriceUSD");  // select UsrPriceUSD as UsrPriceUSD, UsrAreaM2 as UsrAreaM2 from UsrRealty where ...
			var areaColumn = esq.AddColumn("UsrArea");
			var cityColumn = esq.AddColumn("=UsrManager.City.Name");  // select.....  from UsrRealty U INNER JOIN Contact C on C.Id = U.UsrManagerId LEFT JOIN City on City.Id = C.CityId
			var visitDateColumn = esq.AddColumn("[UsrRealtyVisit:UsrParentRealty:Id].UsrVisitDatetime");  // select .. V.UsrVisitDatetime  from UsrRealty U LEFT JOIN UsrRealtyVisit V on V.UsrParentRealtyId = U.Id 
			
			Guid typeId = Get<Guid>("RealtyTypeIdParameter");
			Guid offerTypeId = Get<Guid>("RealtyOfferTypeIdParameter");
			
			var typeFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrType", typeId);
			esq.Filters.Add(typeFilter);
			
			var offerTypeFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrOfferType", offerTypeId);
			esq.Filters.Add(offerTypeFilter);
			
			var entityCollection = esq.GetEntityCollection(UserConnection);
			decimal totalUSD = 0;
			decimal totalArea = 0;
			foreach(var entity in entityCollection) {
				decimal price = entity.GetTypedColumnValue<decimal>(priceColumn.Name); // reading using column alias
				decimal area = entity.GetTypedColumnValue<decimal>(areaColumn.Name); // reading using column alias
				totalUSD = totalUSD + price;
				totalArea = totalArea + area;
			}
			
			decimal result = 0;
			if (totalArea > 0) {
				result = totalUSD / totalArea;
			}
			
			Set("AvgPriceUSDParameter", result);
			
			
			return true;
		}

		#endregion

	}

	#endregion

}

