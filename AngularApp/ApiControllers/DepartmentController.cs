using AngularApp.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace AngularApp.ApiControllers
{
    public class DepartmentController : ApiController
    {
        private readonly List<Department> departments = new List<Department>
        {
            new Department { Id = 1003, Name = "PDG", HeadOfDepartment = "MarkLong", Gender = "Male" },
            new Department { Id = 1004, Name = "Testing", HeadOfDepartment = "Long", Gender = "Male" },
            new Department { Id = 1005, Name = "Admin", HeadOfDepartment = "Lilly", Gender = "FeMale" },
            new Department { Id = 1022, Name = "Production", HeadOfDepartment = "Zinggy", Gender = "Male" },
            new Department { Id = 3071, Name = "PDG1", HeadOfDepartment = "MarkLong", Gender = "Female" }
        };

        [HttpGet]
        public IEnumerable<Department> GetDepartments()
        {
            return departments;
        }
    }
}
