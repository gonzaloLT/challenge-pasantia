SELECT
    u.username,
    u.status,
    g.name AS security_group,
    a.name AS access_level
FROM
    users_base u
JOIN
    user_security us ON u.id = us.user_id
JOIN
    security_groups g ON us.group_id = g.id
JOIN
    access_level a ON us.access_level_id = a.id
ORDER BY u.username, g.name;