using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopAPI.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        T Get(string id);
        T Get(int id);
        void Create(T item);
        void Update(T item);
        void Delete(string id);
        void Delete(int id);
        void Save();
    }
}
