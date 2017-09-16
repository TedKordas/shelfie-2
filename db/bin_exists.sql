SELECT *
FROM bin b
JOIN shelf s ON b.shelf_id = s.id
WHERE s.letter_id = $1
    AND b.bin_num = $2;