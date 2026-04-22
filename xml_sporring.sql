SELECT
    XMLELEMENT(
        NAME aktive-medlemmer,
        XMLAGG(
            XMLELEMENT(
                NAME medlem,
                XMLATTRIBUTES(m.id AS "mId"),
                XMLFOREST(
                    m.fornavn  AS fornavn,
                    m.etternavn AS etternavn
                ),
                XMLELEMENT(
                    NAME avgift,
                    XMLATTRIBUTES(
                        CASE WHEN a.betalt THEN 'J' ELSE 'N' END AS betalt,
                        a.betalingsdato AS betalingsdato
                    ),
                    EXTRACT(YEAR FROM CURRENT_DATE)
                )
            )
        )
    ) AS resultat
FROM medlem m
    JOIN medlemsavgift a
    ON a.medlem_id = m.id
WHERE m.status = 'aktiv'
    AND a.år = EXTRACT(YEAR FROM CURRENT_DATE)
    AND m.lokallag_id = :lokallag_id;