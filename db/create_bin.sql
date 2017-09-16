INSERT INTO bin (name, price, shelf_id, bin_num)
VALUES ($1, $2, (SELECT id FROM shelf WHERE letter_id = $3), $4);