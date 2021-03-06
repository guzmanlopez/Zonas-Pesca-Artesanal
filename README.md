# Mapa interactivo de las zonas de Pesca Artesanal y puertos de desembarque en Uruguay.

Este programa es un mapa web interactivo que utiliza la librería JavaScript de código abierto [Leaflet](http://leafletjs.com/ "Leaflet webpage").

![Image](http://leafletjs.com/docs/images/logo.png)

### [Ir al mapa](https://cdn.rawgit.com/guzmanlopez/Zonas-Pesca-Artesanal/master/index.html "demo")

#### **Resumen**

Las zonas de pesca artesanal son todas las zonas autorizadas y definidas por la Dirección Nacional de Recursos Acuáticos [(DINARA)](http://www.dinara.gub.uy "DINARA webpage") para ejercer actividades de pesca artesanal dentro del territorio nacional. Existen en total doce zonas y son asignadas a los pescadores en los permisos de pesca de manera que un permiso de pesca artesanal habilita a pescar exclusivamente dentro de una única zona. Las zonas están agrupadas en cinco regiones: Río Uruguay (zonas "A", "B" y "C"), Río de la Plata (zonas "D" y "E"), Río Negro (zonas "F", "G", "H" e "I"), Lagunas costeras (zonas "J" y "K") y Océano Atlántico (zona "L"). En ocasiones, las divisiones de Registro general de pesca y Unidad de Pesca Artesanal de la DINARA requieren visualizar las zonas de pesca artesanal en un mapa. Para facilitar esta tarea, se decidió generar un mapa web que es una nueva tendencia en cartografía. Se eligió la librería JavaScript [Leaflet](http://leafletjs.com/ "Leaflet webpage") debido a que es una librería moderna y de código abierto para desarrollar mapas web interactivos. La información espacial y la descripción de las zonas de pesca artesanal junto con los puertos de desembarque fueron incorporadas al Sistema de Información Geográfica [QGIS](http://www.qgis.org "QGIS webpage"). Con el complemento "qgis2leaf" se incorporaron las zonas de pesca a un mapa web y los puertos (n = 63) fueron incorporados posteriormente en el código del mapa. La interfaz original del mapa web fue modificada: se agregaron más mapas de base, se incorporó un "geocoder" para realizar búsquedas generales y específicas de elementos geo referenciados, todos los elementos de la interfaz fueron traducidos al español y modificados cuando se consideró necesario. Todo el código del mapa web tiene un tamaño en disco de 6.2 MB y posee una interfaz gráfica interactiva, amigable y sencilla para el usuario. Para mejorar aún más la experiencia del usuario se espera incorporar nuevos elementos en futuras versiones de este mapa web: más puertos de desembarque, mejor ajuste y resolución de las capas de las zonas, visualizar sub zonas de pesca, realizar búsquedas en la base de datos GeoNames, etc.

## Capturas de pantalla

![Image](https://raw.githubusercontent.com/guzmanlopez/Zonas-Pesca-Artesanal/master/screenshots/screenshot01.png)

![Image](https://raw.githubusercontent.com/guzmanlopez/Zonas-Pesca-Artesanal/master/screenshots/screenshot02.png)

## Futuros desarrollos

* Agrupar puertos por zonas: control de capas de puertos por zonas y en distintos colores
* Agregar más puertos de desembarque
* Mejorar definición de capas

## Referencias

Dirección Nacional de Recursos Acuáticos & Proyecto GEF (2013) Guía Práctica Para
Pescadores Artesanales: beneficios, derechos y trámites vinculados a la actividad.
Montevideo.

Horta, S. & Defeo, O. (2012) The spatial dynamics of the whitemouth croaker artisanal
fishery in Uruguay and interdependencies with the industrial fleet. Fisheries Research
125–126, 121–128.

QGIS Development Team (2015) QGIS Geographic Information System. Open Source
Geospatial Foundation Project. Disponible en: http://qgis.osgeo.org.

## Licencia
[GPLv3](LICENSE.txt)
