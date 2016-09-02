using System.Collections.Generic;
using System.Web.Http;

namespace AngularApp.ApiControllers
{
    public class EmployeeController : ApiController
    {
        private readonly List<Employee> employees = new List<Employee>
        {
            new Employee { Id = 1003, Name = "Kevin Wong", Gender = "Male", Salary = 4000.00m, DepartmentId = 1003  },
            new Employee { Id = 1004, Name = "Samantha Hogan", Gender = "Female", Salary = 3000.00m, DepartmentId = 1004  },
            new Employee { Id = 1005, Name = "Sean Campbell", Gender = "Male", Salary = 2000.00m, DepartmentId = 1005  },
            new Employee { Id = 1006, Name = "Nooka Aurera", Gender = "Male", Salary = 1000.00m, DepartmentId = 1022  },
            new Employee { Id = 1007, Name = "Nikki Guerara", Gender = "Female", Salary = 5000.00m, DepartmentId = 3071  }

        };

        [HttpGet]
        public IEnumerable<Employee> GetEmployees()
        {
            return employees;
        }

        [HttpGet]
        public IEnumerable<Employee> GetEmployeesByDepartmentId(int departmentId)
        {
            return employees.FindAll(e => e.DepartmentId == departmentId);
        }
    }

    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public decimal Salary { get; set; }
        public int DepartmentId { get; set; }
    }
}
