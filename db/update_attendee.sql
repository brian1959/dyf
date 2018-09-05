UPDATE users SET firstname = $2, lastname = $3, "address" = $4, city = $5, "state" = $6, zip = $7, email = $9, phone = $8, passtype = $10 WHERE userid = $1
returning *;
