INSERT INTO users
    (user_name, user_email, picture, auth_id)
VALUES
    ($1, $2, $3, $4)
returning *;