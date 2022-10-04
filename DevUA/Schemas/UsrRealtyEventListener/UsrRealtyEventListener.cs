namespace Terrasoft.Configuration
{
    using System;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;
    [EntityEventListener(SchemaName = "UsrRealty")]
    public class RealtyEntityEventListener : BaseEntityEventListener
    {
        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);
            Entity realty = (Entity)sender;
            decimal price = realty.GetTypedColumnValue<decimal>("UsrPriceUSD");
            if (price > 1000000000)
            {
                e.IsCanceled = true;
                string messageTemplate =
                    realty.UserConnection.GetLocalizableString("UsrRealtyEventListener", "ValueIsTooBig");
                string message = string.Format(messageTemplate, "1.0 לכנה");
                throw new Exception(message);
            }
        }
    }

}