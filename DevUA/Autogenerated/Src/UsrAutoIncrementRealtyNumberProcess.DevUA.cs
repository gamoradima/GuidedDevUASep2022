namespace Terrasoft.Core.Process
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

	#region Class: UsrAutoIncrementRealtyNumberProcessMethodsWrapper

	/// <exclude/>
	public class UsrAutoIncrementRealtyNumberProcessMethodsWrapper : ProcessModel
	{

		public UsrAutoIncrementRealtyNumberProcessMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask2Execute", ScriptTask2Execute);
		}

		#region Methods: Private

		private bool ScriptTask2Execute(ProcessExecutingContext context) {
			int number = Convert.ToInt32(Terrasoft.Core.Configuration.SysSettings.GetDefValue(UserConnection, "CurrentRealtyNumber"));
			Terrasoft.Core.Configuration.SysSettings.SetDefValue(UserConnection, "CurrentRealtyNumber", number + 1);
			return true;
		}

		#endregion

	}

	#endregion

}

