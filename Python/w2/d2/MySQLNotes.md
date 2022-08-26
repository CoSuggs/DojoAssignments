# Create, Read, Update, Delete




## CREATE
    - key words: INSERT INTO, VALUES
    - structure: INSERT INTO table_name (column_name1, column_name2) VALUES ('values1', 'values2');

    - INSERT INTO users (first_name, last_name, email, pw) VALUES ('tyler', 'tbo', 'tt@email.com', 'Thibault');

    - INSERT INTO users (first_name, last_name, email, pw) VALUES ('joe', 'tbo', 'jt@email.com', 'Thibault');

    - INSERT INTO users (first_name, last_name, email, pw) VALUES ('curtis', 'tbo', 'ct@email.com', 'Thibault');

    - INSERT INTO users (first_name, last_name, email, pw) VALUES ('cesar', 'jack-vallee', 'cj@email.com', 'Thibault');

## READ

    - key words: SELECT, FROM
    - structure: SELECT * FROM (database_name)table_name;
    - structure2: SELECT * FROM table_name WHERE id = ?;

### get_one

    - SELECT * FROM users WHERE id = 4;

### get_multiple

    - SELECT * FROM users WHERE id in (3,4,5);

### get_all

    - SELECT * FROM users;
    - SELECT * FROM addresses;
    - SELECT * FROM cars;

## Update
    - words: UPDATE, SET
    - structure: DELETE FROM table_name SET column_name = 'new_value', column_name2 = 'new_value2';

### update_one

    - UPDATE users SET last_name = 'jack-vallee' WHERE id = 9; 

### update_multiple

    - UPDATE users SET last_name = 'tbo' WHERE id in (6,7,8);

## Delete
    - key words: DELETE FROM, WHERE
    - structure: DELETE FROM table_name WHERE id = ?;

### delete_one

    - DELETE FROM users WHERE id = 9;

### delete_multiple

    - DELETE FROM users WHERE id in (6,7,8);

### delete_all

    - DELETE FROM users;

## Functions
```https://login.codingdojo.com/m/172/7218/52110```

### Text Functions 

|Function     |Usage        |Returns                      |
|-|-|-|
|CONCAT( )|CONCAT(t1,t2,...)|A new string of the form t1t2|
|CONCAT_WS( )|CONCAT_WS(S,t1,t2,...)|A new string of the form t1t2S|
|LENGTH( )|LENGTH(t)|The number of characters in t.|
|TRIM( )|TRIM(t)|t with excess spaces from the beginning and end removed|
|UPPER( )|UPPER(t)|t capitalized|
|LOWER( )|LOWER(t)|t in all-lowercase format.|
|REPLACE( )|REPLACE(t1,t2,t3)|The string t1 with instances of t2 replaced with t3|
|SUBSTRING( )|SUBSTRING(t,x,y)|y characters from t beggining with x (indexed from 1)|

### Numeric Functions

|Function     |Usage        |Returns                      |
|-------------|-------------|-----------------------------|
|ABS( )|ABS(n)|the absolute value of n|
|MOD( )|MOD(n1,n2)|The remainder of dividing n1 by n2|
|RAND( )|RAND()|A random number between 0-10|
|ROUND( )|ROUND(n1,n2)|n1 rounded to n2 decimal places|
|SQRT( )|SQRT(n)|The square root of n|

### Date Functions
|Function     |Usage        |Returns                      |
|-------------|-------------|-----------------------------|
|DATE( )|DATE(dt)|The date value of dt|
|HOUR( )|HOUR(dt)|The hour value of dt|
|MINUTE( )|MINUTE(dt)|The minute value of dt|
|SECOND( )|SECOND(dt)|The second value of dt|
|DAYNAME( )|DAYNAME(dt)|The name of the day of dt|
|DAYOFMONTH( )|DAYOFMONTH(dt)|The numerical day value of dt|
|MONTHNAME( )|MONTHNAME(dt)|The name of the month of dt|
|MONTH( )|MONTH(dt)|The numerical month value of dt|
|YEAR( )|YEAR(dt)|The year value of dt|
|CURDATE( )|CURDATE( )|The current date|
|CURTIME( )|CURTIM( )|The current time|
|NOW( )|NOW( )|The current date and time|
|TIME_FORMAT( )|TIME_FORMAT(dt,format)|The time in the specified format|
|DATE_FORMAT( )|DATE_FORMAT(dt,format)|The date in the specified format|

## Joins

|Function              |Returns                               |
|----------------------|--------------------------------------|
|AVG(column)           |The average of the value in a column  |
|COUNT(column)         |The number of values in a column      |
|GROUP_CONCAT(column)  |The concatenation of a column's values|
|MAX(column)           |The largest value in a column         |
|MIN(column)           |The smallest value in a column        |
|SUM(column)           |The sum of all the values in a column |

## JOIN
```
- primary table -> or the table on the left
    - users (In below example)
- secondary table -> or the table on the right
    - addresses (In below example)
```
- Join
    1. (example) SELECT * 
        FROM users 
            JOIN addresses 
                ON users.id = addresses.user_id;

- LEFT JOIN
    1. (example) SELECT * 
        FROM users 
            LEFT JOIN addresses 
                ON users.id = addresses.user_id;

    2. (example) SELECT * 
        FROM addresses 
            LEFT JOIN addresses 
                ON users.id = addresses.user_id;

    3. (example) SELECT tweets.tweet as kobe_tweets
        FROM users
            LEFT JOIN tweets
                ON users.id = tweets.user_id
                    WHERE users.id = 1;

- RIGHT JOIN 
    - (Is the default and does not need to be specified)

- DOUBLE JOIN
    1. (example) SELECT * 
        FROM users 
            JOIN users_has_cars 
                ON users.id = users_has_cars.user_id 
                    JOIN cars 
                        ON users_has_car.car_id = cars.id;

    2. (example) SELECT * 
        FROM users 
            JOIN users_has_cars 
                ON users.id = users_has_cars.user_id 
                    JOIN cars 
                        ON users_has_car.car_id = cars.id 
                            WHERE users.id = 10;

    3. (example) SELECT * 
        FROM users 
            JOIN users_has_cars 
                ON users.id = users_has_cars.user_id 
                    JOIN cars 
                        ON users_has_car.car_id = cars.id 
                            WHERE cars.id = 1;

    4. (example) SELECT * 
        FROM cars 
            JOIN users_has_cars 
                ON cars.id = users_has_cars.car_id 
                    JOIN users ON users_has_car.users_id = users.id 
                        WHERE cars.id = 1;


    5. (example) SELECT first_name, tweet
        FROM users
            LEFT JOIN faves
                ON users.id = faves.user_id
                    LEFT JOIN tweets
                        ON faves.tweet_id = tweets.id
                            WHERE users.id = 2;

    6. (example)SELECT users.first_name as followed, users2.first_name as follower 
        FROM users
            LEFT JOIN follows
                ON users.id = follows.followed_id
                    LEFT JOIN users as users2
                        ON users2.id = follows.follower_id
                            WHERE users.id = 1;

