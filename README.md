# README.md

IMPORTANT: Once you've cloned this to your forked repository, ensure that you continuously update this document as you complete each task to demonstrate your ongoing progress.

Please include your shared repository link here:

 https://github.com/TanvirIslam12/A2-TanvirIslam-21667820.git


Make sure for **your case it is in Private**
## Access Database
1 **Plsql Cheat Sheet:**
You can refer to the PostgreSQL cheat sheet [here](https://www.postgresqltutorial.com/postgresql-cheat-sheet/).

2 **Know the Container ID:**
To find out the container ID, execute the following command:
   ```bash
   docker ps
    9958a3a534c9   testsystem-nginx           "/docker-entrypoint.…"   6 minutes ago   Up 6 minutes   0.0.0.0:80->80/tcp   testsystem-nginx-1
    53121618baa4   testsystem-frontend        "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   3000/tcp             testsystem-frontend-1
    c89e46ac94b0   testsystem-api             "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5000/tcp             testsystem-api-1
    9f4aea7cf538   postgres:15.3-alpine3.18   "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5432/tcp             testsystem-db-1
   ```
3. Running the application

**docker compose command:**
   ```bash
   docker compose up --build
   ```

4 **Access postgreSQL in the container:**
Once you have the container ID, you can execute the container using the following command:
You will see the example of running the PostgreSQL inside the container.
   ```bash
   docker exec -it testsystem-db-1 psql -U postgres
   choiruzain@MacMarichoy TestSystem % docker exec -it testsystem-db-1 psql -U postgres                                       
   psql (15.3)
   Type "help" for help.
   
   postgres=# \dt
             List of relations
    Schema |   Name   | Type  |  Owner   
   --------+----------+-------+----------
    public | contacts | table | postgres
    public | phones   | table | postgres
   (2 rows)
  
    postgres=# select * from contacts;
    id |  name  |         createdAt         |         updatedAt         
   ----+--------+---------------------------+---------------------------
     1 | Helmut | 2024-08-08 11:57:57.88+00 | 2024-08-08 11:57:57.88+00
    (1 row)
    postgres=# select * from phones;
    id | phone_type |   number    | contactId |         createdAt          |         updatedAt          
   ----+------------+-------------+-----------+----------------------------+----------------------------
     1 | Work       | 081431      |         1 | 2024-08-08 11:59:04.386+00 | 2024-08-08 11:59:04.386+00


postgres=# select * from contacts;
   ```
Replace `container_ID` with the actual ID of the container you want to execute.

## Executing API

### Contact API


1. Add contacts API  (POST)
```bash
http post http://localhost/api/contacts name="Choiru"
        
choiruzain@MacMarichoy-7 TestSystem % http post http://localhost/api/contacts name="Choiru"
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 102
Content-Type: application/json; charset=utf-8
Date: Thu, 08 Aug 2024 21:01:53 GMT
ETag: W/"66-FmPYAaIkyQoroDwP2JsAZjWTAxs"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

{
"createdAt": "2024-08-08T21:01:53.017Z",
"id": 1,
"name": "Choiru",
"updatedAt": "2024-08-08T21:01:53.017Z"
}

```
2 Get contacts API  (GET)

```bash
http get http://localhost/api/contacts


choiruzain@MacMarichoy-7 TestSystem % http get http://localhost/api/contacts
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 104
Content-Type: application/json; charset=utf-8
Date: Thu, 08 Aug 2024 21:04:58 GMT
ETag: W/"68-V+4KuL2xahYt8YAkKG6rKdR7wHg"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

[
{
"createdAt": "2024-08-08T21:01:53.017Z",
"id": 1,
"name": "Choiru",
"updatedAt": "2024-08-08T21:01:53.017Z"
}
]


```
3. Show/create the API commmand to delete the contacts (DELETE)

```bash





```

4. Show/create the API command to edit the contacts (PUT)
```
http get http://localhost/api/contacts/1/phones

```

### Phone API
# Task1- Changes to Table
1) “Delete Contact” instead of just “Delete”.
![Delete Contact Button](./Screenshots/picture1_ts1.png "Delete to Delete Contact")


2) “Add Tanvir’s Phone” instead of "Add”.
![Add Tanvir's phone](./Screenshots/picture2_ts1.png "Add to Add Tanvir's phone")

3) Make the placeholder “Name” to a drop down menu.
![Drop down](./Screenshots/picture3_ts1.png "placeholder=Name to Drop down")

4) In the <tr> element of the table, Change “Name” to “Phone Type”.
![Name to Phone Type](./Screenshots/picture4_ts1.png "<tr> element from Name to Phone Type")



## Task2- API Commands
1) Show the API command for “Show Contact”
![Show Conatct](./Screenshots/picture1_ts2.png "Show Conatct output")

2) Show the API command for “Add Contact”.
![Add Conatct](./Screenshots/picture2_ts2.png "Add Conatct output")

3) Show the API command for “Delete Contact”.
![Delete Conatct](./Screenshots/picture3_ts2.png "Delete Conatct output")

4) Show the API command for “Update Contact”.
![Update Conatct](./Screenshots/picture4_ts2.png "Update Conatct output")

5) Show the API command for “Show phone”.
![Show Phone](./Screenshots/picture5_ts2.png "Show Phone output")

6) Show the API command for “Add Phone”.
![Add Phone](./Screenshots/picture6_ts2.png "Add Phone output")

7) Show the API command for “Delete Phone”.
![Delete Phone](./Screenshots/picture7_ts2.png "Delete Phone output")

8) Show the API command for “Update Phone”.\
![Update Phone](./Screenshots/picture8_ts2.png "Update Phone output")



## Task3- API Commands test after Changes
1) Show the API command for “Show Contact”
![Show Conatct](./Screenshots/picture1_ts3.png "Show Conatct output")

2) Show the API command for “Add Contact”.
![Add Conatct](./Screenshots/picture2_ts3.png "Add Conatct output")

3) Show the API command for “Delete Contact”.
![Delete Conatct](./Screenshots/picture3_ts3.png "Delete Conatct output")

4) Show the API command for “Update Contact”.
![Update Conatct](./Screenshots/picture4_ts3.png "Update Conatct output")

5) Show the API command for “Show phone”.
![Show Phone](./Screenshots/picture5_ts3.png "Show Phone output")

6) Show the API command for “Add Phone”.
![Add Phone](./Screenshots/picture6_ts3.png "Add Phone output")

7) Show the API command for “Delete Phone”.
![Delete Phone](./Screenshots/picture7_ts3.png "Delete Phone output")

8) Show the API command for “Update Phone”.\
![Update Phone](./Screenshots/picture8_ts3.png "Update Phone output")




## Task4- Create Company Tables and APIs to test it
1) Create “companies” table.
![Companies table](./Screenshots/picture1_ts4.png "Create companies table")


2) Show “company” table.
![Company Table](./Screenshots/picture2_ts4.png "Show Company Table")

# Create APIs

3) “Create a New Company”
![Create Company](./Screenshots/picture3_ts4.png "New Company")

4) “Get All Companies for a Specific Contact”
![Get All Companies](./Screenshots/picture4_ts4.png "Show All companies for contact")


5) “Get a Single Company by ID for a Specific Contact”
![Get a Company](./Screenshots/picture5_ts4.png "Show Specific Company for conatct")


6) “Update a Company by ID for a Specific Contact”
![Update Company](./Screenshots/picture6_ts4.png "Update a company for a contact")


7) “Delete a Company by ID for a Specific Contact”
![Delete Company](./Screenshots/picture7_ts4.png "Delete a Company for a Contact")



## Task5- Frontend for Company Table

1) Show Before Clicking "Add Company"
Before we add the Company and its address we have click on the green button to open the Editing mode, that is when we insert the Company_name and Company_address.
![Add Company](./Screenshots/picture1_ts5.png "Show Add company BUtton")

2) Show the "cancel Button"
When we click the Add Company button it takes us to the Edit Mode to enter name and address of the Company, but when we decide to exit the Edit mode we click the blue "Cancel Button"
![Cancel Button](./Screenshots/picture2_ts5.png "Show cancel Button")

3) Show the names of the Company table column.
We can see 3 columns present, 1 for the name, another for address and the last to record their action.
![Columnn names](./Screenshots/picture3_ts5.png "Show Company table Column names ")

