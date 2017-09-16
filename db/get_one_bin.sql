SELECT *
FROM bin b
    JOIN shelf s on b.shelf_id = s.id
WHERE s.letter_id = $1
    AND b.bin_num = $2;