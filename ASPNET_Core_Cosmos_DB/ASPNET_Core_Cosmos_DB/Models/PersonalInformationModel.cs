using Newtonsoft.Json;
using System;

namespace ASPNET_Core_Cosmos_DB.Models
{
    public class PersonalInformationModel
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }
        [JsonProperty(PropertyName = "firstName")]
        public string firstName { get; set; }
        [JsonProperty(PropertyName = "middleName")]
        public string middleName { get; set; }
        [JsonProperty(PropertyName = "lastName")]
        public string lastName { get; set; }
        [JsonProperty(PropertyName = "gender")]
        public string gender { get; set; }
        [JsonProperty(PropertyName = "birthDate")]
        public DateTime birthDate { get; set; }
        [JsonProperty(PropertyName = "address")]
        public string address { get; set; }
        [JsonProperty(PropertyName = "city")]
        public string city { get; set; }
        [JsonProperty(PropertyName = "state")]
        public string state { get; set; }
        [JsonProperty(PropertyName = "pinCode")]
        public string pinCode { get; set; }
        [JsonProperty(PropertyName = "qualification")]
        public string qualification { get; set; }
        [JsonProperty(PropertyName = "occupation")]
        public string occupation { get; set; }
        [JsonProperty(PropertyName = "jobType")]
        public string jobType { get; set; }
        [JsonProperty(PropertyName = "income")]
        public decimal income { get; set; }
        [JsonProperty(PropertyName = "email")]
        public string email { get; set; }
        [JsonProperty(PropertyName = "hobbies")]
        public string hobbies { get; set; }
        [JsonProperty(PropertyName = "maritalStatus")]
        public string maritalStatus { get; set; }
        [JsonProperty(PropertyName = "residentType")]
        public string residentType { get; set; }
        [JsonProperty(PropertyName = "contactNo")]
        public string contactNo { get; set; }

    }
}
