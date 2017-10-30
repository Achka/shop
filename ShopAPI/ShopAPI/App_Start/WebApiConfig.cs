using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using System.Web.Http.Cors;
using Unity;
using ShopAPI.Interfaces;
using ShopAPI.Models;
using Unity.AspNet.WebApi;
using ShopAPI.Controllers;
using Unity.Injection;

namespace ShopAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            var container = new UnityContainer();
            container.RegisterType<IRepository<Animal>, Repository<Animal>>();
            container.RegisterType<IRepository<ApplicationUser>, Repository<ApplicationUser>>();
            container.RegisterType<IUnitOfWork, UnitOfWork>();
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));
            container.RegisterType<AccountController>(new InjectionConstructor(
                container.Resolve<IUnitOfWork>()));
            config.DependencyResolver = new UnityDependencyResolver(container);
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

        }
    }
}
