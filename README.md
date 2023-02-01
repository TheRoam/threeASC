![columbretes](https://user-images.githubusercontent.com/63456390/215267062-a8a1fd75-13e5-41c4-95d2-3e3f2cf1f787.png)
# threeASCdem
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
* Make this an independent library as it now a bit mixed between the main .html and ascii_data.js

**WIP Demo**

https://theroamingworkshop.cloud/threeJS/models/asc

**Acknowledgements**

Project based on threeJS "Terrain - Raycast" example and community contributions.
![teide2](https://user-images.githubusercontent.com/63456390/215273252-0cf53456-5715-4671-886e-e5c84c41840c.png)
