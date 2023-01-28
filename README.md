# threeASC
An ASCII file explorer to visualize terrain Digital Elevation Models (DEM) easily with ThreeJS.

It works by reading every value in the ASCII file and passing them to the vertices of a 3D mesh.

**Features**

* Load .asc (ASCII) terrain elevation local file.
* Load satellite image texture in standard format (.jpg, .png, etc).
* Display elevation on mouse position using raycast (disabled at start for performance).
* Vertical elevation scale can be adjusted with hSCALE variable.

**Future additions**

* Georeferencing mesh.
* Working with multiple mesh tiles.
* Interactive edition of mesh vertical scale.

**WIP Demo**

https://theroamingworkshop.cloud/threeJS/models/asc/three_asc.html

**Acknowledgements**

Project based on threeJS "Terrain - Raycast" example and community contributions.
