/*
				5)	Definir un listado de productos con los datos Codigo, Marca, Nombre, Precio y Detalle.
					A partir de la clonacion del nodo ".product-grid", mostrar el listado de productos en HTML.
			*/
			var productos = [
					["P001", "Apple", "iPhone 6", 499.99, "iPhone es una línea de teléfonos inteligentes de alta gama diseñada y comercializada por Apple Inc. Ejecuta el sistema operativo móvil iOS antes conocido como 'iPhone OS' hasta mediados de 2010"],
					["P002", "Apple", "iPad 4", 399.99, "iPad es una línea de tabletas diseñadas y comercializadas por Apple Inc. Se sitúa en una categoría entre un teléfono inteligente y una computadora portátil, enfocado más al acceso que a la creación de aplicaciones y temas."],
					["P003", "Google", "Nexus 4", 299.99, "Google Nexus era una línea de dispositivos móviles que utilizan el sistema operativo Android desarrollado por Google en colaboración con diferentes fabricantes de hardware. Los dispositivos Nexus son los primeros dispositivos Android en recibir actualizaciones del sistema operativo."],
					["P007", "Apple", "Watch", 199.99, "El Apple Watch es el primer smartwatch creado por Apple. Todas las correas son intercambiables y son compatibles con todos los modelos de 38 y 42mm respectivamente."]
				];

			function mostrarProductos() {

				var listadoProductos = document.querySelector(".grid-product");
				var productoBase = document.querySelector(".product-grid").cloneNode(true);
				listadoProductos.innerHTML = "";

				for (var i = 0; i < productos.length; i++) {

					var producto = productoBase.cloneNode(true);
					producto.id = productos[i][0];
					

					producto.querySelector("img").src = "images/productos/" + productos[i][0] + ".jpg";
					producto.querySelector("h4 a").innerText = productos[i][1] + " - " + productos[i][2];
					producto.querySelector("p").innerText = productos[i][4];
					producto.querySelector("span").innerText = "$" + productos[i][3];

					listadoProductos.appendChild( producto );

				}
			}

			///////////////////////

			var productosO = [
					{ codigo : "P001", marca : "Apple", nombre : "iPhone 6", precio : 499.99, detalle : "iPhone es una línea de teléfonos inteligentes de alta gama diseñada y comercializada por Apple Inc. Ejecuta el sistema operativo móvil iOS antes conocido como 'iPhone OS' hasta mediados de 2010" },
					{ codigo : "P002", marca : "Apple", nombre : "iPad 4", precio : 399.99, detalle : "iPad es una línea de tabletas diseñadas y comercializadas por Apple Inc. Se sitúa en una categoría entre un teléfono inteligente y una computadora portátil, enfocado más al acceso que a la creación de aplicaciones y temas." },
					{ codigo : "P008", marca : "Google", nombre : "Nexus 4", precio : 299.99, detalle : "Google Nexus era una línea de dispositivos móviles que utilizan el sistema operativo Android desarrollado por Google en colaboración con diferentes fabricantes de hardware. Los dispositivos Nexus son los primeros dispositivos Android en recibir actualizaciones del sistema operativo." },
					{ codigo : "P007", marca : "Apple", nombre : "Watch", precio : 199.99, detalle : "El Apple Watch es el primer smartwatch creado por Apple. Todas las correas son intercambiables y son compatibles con todos los modelos de 38 y 42mm respectivamente." }
				];


			function ascendente(a, b) { /* menor a mayor */
  				console.log("A es: " + a["codigo"] );
  				console.log("B es: " + b["codigo"] );
  				console.log("-----------");

  				if( a["codigo"] > b["codigo"] ){
  					return 1;
  				}
  				if( a["codigo"] < b["codigo"] ){
  					return -1;
  				}
  				return 0;
			}
			function descendente(a, b) { /* mayor a menor */
  				console.log("A es: " + a["codigo"] );
  				console.log("B es: " + b["codigo"] );
  				console.log("-----------");

  				if( a["codigo"] < b["codigo"] ){
  					return 1;
  				}
  				if( a["codigo"] > b["codigo"] ){
  					return -1;
  				}
  				return 0;
			}