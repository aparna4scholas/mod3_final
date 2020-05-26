# mod3_final
 [!backend Springboot application  ]--> (link:https://github.com/aparna4scholas/mid-mod3-springboot)
 # Screen shots
 ![wireframe](./assets/../ppeinventoryapp/src/components/assets/Screen%20Shot%202020-05-26%20at%209.45.36%20AM.png)
 ![wireframe](./assets/../ppeinventoryapp/src/components/assets/Screen%20Shot%202020-05-26%20at%209.46.19%20AM.png)
 ![wireframe](./assets/../ppeinventoryapp/src/components/assets/Screen%20Shot%202020-05-26%20at%209.46.33%20AM.png)
 ![wireframe](./assets/../ppeinventoryapp/src/components/assets/Screen%20Shot%202020-05-26%20at%209.46.48%20AM.png)


 
 # mission statemnt: 
 Personal Protection Equipment
 This project displays the available PPE inventory in each city.so that all the hospitals and government can use this data.
 -->Technologies:
 ->UI: 
 ->Developed in ReactJs
 ->Backend : 
 ->Developed in Spring boot with postgres database.It has 3 models 
 ->1.Inventory
 ->2.Displays meta data like cities to shown.
 ->3.city population data.
 
 -->Springboot App:
->How to setup

->Download source code
->create a postgres database on the machine with ->name "ppe_db"
->Run springboot application
-->>APIs

->PPE Inventory:

->GET /ppe_api/v1/ppedata - Retrieves all
->POST /ppe_api/v1/pperecords - creates new city inventory
->PUT /ppe_api/v1/pperecords/{cityName} - updates inventory
->GET /ppe_api/v1/pperecords/{cityName} - Retrieves specific city inventory.
->DELETE /ppe_api/v1/pperecords/{cityName} - Deletes city inventory
->City:

->GET /ppe_api/v1/citynames - Retrieves all city names
->POST /ppe_api/v1/citynames - Creates new city name
->DELETE /ppe_api/v1/citynames/{cityName} - Deletes city name
->GET /ppe_api/v1/citynames/{cityName} - Retrieves city details

