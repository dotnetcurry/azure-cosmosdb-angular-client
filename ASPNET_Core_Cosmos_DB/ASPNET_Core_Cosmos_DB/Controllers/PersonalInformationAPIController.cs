using ASPNET_Core_Cosmos_DB.Models;
using ASPNET_Core_Cosmos_DB.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ASPNET_Core_Cosmos_DB.Controllers
{
    [Produces("application/json")]
    [Route("api/PersonalInformationAPI")]
    [EnableCors("AllowAll")]
    public class PersonalInformationAPIController : Controller
    {
        IDbCollectionOperationsRepository<PersonalInformationModel, string> _repo;
        public PersonalInformationAPIController(IDbCollectionOperationsRepository<PersonalInformationModel,string> r)
        {
            _repo = r;
        }
        [Route("Person/All")]
        public IActionResult Get()
        {
            var persons = _repo.GetItemsFromCollectionAsync().Result;
            return Ok(persons);
        }
        [Route("Person/{id}")]
        public IActionResult Get(string id)
        {
            var person = _repo.GetItemFromCollectionAsync(id).Result;
            return Ok(person);
        }
        [Route("Person/Create")]
        public IActionResult Post([FromBody]PersonalInformationModel per)
        {
            var person = _repo.AddDocumentIntoCollectionAsync(per).Result;
            return Ok(person);
        }
        [Route("Person/Update/{id}")]
        public IActionResult Put(string id, [FromBody]PersonalInformationModel per)
        {
            var person = _repo.UpdateDocumentFromCollection(id,per);
            return Ok(person.Result);
        }
        [Route("Person/Delete/{id}")]
        public IActionResult Delete(string id)
        {
            var res = _repo.DeleteDocumentFromCollectionAsync(id);
            return Ok(res.Status);
        }

    }
}