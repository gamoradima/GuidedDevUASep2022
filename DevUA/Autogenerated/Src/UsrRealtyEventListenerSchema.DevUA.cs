namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventListenerSchema

	/// <exclude/>
	public class UsrRealtyEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventListenerSchema(UsrRealtyEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("cb81a425-1bbe-49e4-94d5-707174453525");
			Name = "UsrRealtyEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("1c30e392-3363-4e74-8e33-cdd7d67911d5");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,146,209,74,195,48,20,134,239,7,123,135,67,175,90,144,162,183,78,5,55,167,12,68,197,109,222,136,23,89,122,86,35,105,82,146,116,58,197,71,19,31,201,87,240,164,217,92,215,237,194,67,161,237,233,159,47,255,159,30,197,10,180,37,227,8,19,52,134,89,61,119,233,64,171,185,200,43,195,156,208,170,219,249,232,118,128,170,178,66,229,48,94,90,135,69,175,217,106,46,52,152,14,149,19,78,160,253,143,38,29,46,80,185,181,244,177,110,47,235,222,181,160,125,20,154,120,204,159,177,96,55,100,19,78,33,154,90,115,143,76,186,101,148,60,133,69,101,53,147,130,3,151,204,90,8,223,246,96,224,24,250,204,226,158,47,129,178,202,216,0,234,5,89,22,25,194,66,139,12,110,213,72,89,52,142,178,196,122,246,130,220,129,69,149,161,57,128,192,236,227,156,130,213,228,115,147,91,192,100,67,108,192,125,205,200,72,218,4,174,73,152,244,182,149,1,13,166,78,69,241,227,208,72,194,130,150,56,67,46,10,38,161,52,130,251,179,10,171,210,43,116,147,101,137,217,64,203,170,80,15,76,86,120,178,146,158,197,254,60,239,188,126,58,190,136,218,187,139,57,196,1,118,6,71,135,235,74,182,69,173,108,190,48,29,217,1,83,28,37,102,228,195,153,10,123,187,42,235,140,31,12,154,62,203,114,156,96,81,74,230,200,247,174,210,215,42,204,148,142,140,166,83,209,249,211,104,250,108,215,154,51,41,222,217,76,226,184,38,198,155,25,217,250,207,209,1,68,117,250,145,157,104,221,23,249,78,222,93,87,228,62,52,210,75,109,10,230,226,150,91,66,30,165,135,240,243,253,245,119,237,165,186,103,163,95,65,225,43,12,223,56,150,222,251,26,213,150,127,110,94,87,143,116,235,118,62,127,1,240,129,155,12,168,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("96f59242-2342-124b-9d7b-b6a17ab916d4"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("1c30e392-3363-4e74-8e33-cdd7d67911d5"),
				CreatedInSchemaUId = new Guid("cb81a425-1bbe-49e4-94d5-707174453525"),
				ModifiedInSchemaUId = new Guid("cb81a425-1bbe-49e4-94d5-707174453525")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("cb81a425-1bbe-49e4-94d5-707174453525"));
		}

		#endregion

	}

	#endregion

}

