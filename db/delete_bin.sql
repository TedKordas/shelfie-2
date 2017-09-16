DELETE
FROM bin b
USING shelf s
WHERE b.shelf_id = s.id
    AND s.letter_id = $1
    AND b.bin_num = $2;