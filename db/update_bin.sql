UPDATE bin b
SET name = $3,
    price = $4
FROM shelf s
WHERE b.shelf_id = s.id
    AND s.letter_id = $1
    AND b.bin_num = $2;