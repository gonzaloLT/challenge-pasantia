-- Usuarios
INSERT INTO users_base (username, password, status) VALUES
('gonzalobarroso', 'hashejemplo1', 'activo'),
('rvillegas', 'hashejemplo2', 'activo'),
('mercedessilvera', 'hashejemplo3', 'inactivo'),
('ricobarroso', 'hashejemplo4', 'inactivo');

-- Grupos de seguridad
INSERT INTO security_groups (name, description) VALUES
('Producción', 'Acceso al area de planta y linea de manufactura'),
('Logística', 'Gestión de inventario y despacho'),
('Sistemas', 'Administración de infraestructura y aplicaciones');

-- Asignación de usuarios a grupos
INSERT INTO user_security (user_id, group_id, access_level_id)
VALUES (
    (SELECT id FROM users_base      WHERE username = 'gonzalobarroso'),
    (SELECT id FROM security_groups WHERE name     = 'Producción'),
    (SELECT id FROM access_level    WHERE name     = 'Read')
),
(
    (SELECT id FROM users_base      WHERE username = 'gonzalobarroso'),
    (SELECT id FROM security_groups WHERE name     = 'Sistemas'),
    (SELECT id FROM access_level    WHERE name     = 'Administrator')
),
(
    (SELECT id FROM users_base      WHERE username = 'rvillegas'),
    (SELECT id FROM security_groups WHERE name     = 'Producción'),
    (SELECT id FROM access_level    WHERE name     = 'Write')
),
(
    (SELECT id FROM users_base      WHERE username = 'rvillegas'),
    (SELECT id FROM security_groups WHERE name     = 'Logística'),
    (SELECT id FROM access_level    WHERE name     = 'Owner')
),
(
    (SELECT id FROM users_base      WHERE username = 'mercedessilvera'),
    (SELECT id FROM security_groups WHERE name     = 'Logística'),
    (SELECT id FROM access_level    WHERE name     = 'Read')
),
(
    (SELECT id FROM users_base      WHERE username = 'ricobarroso'),
    (SELECT id FROM security_groups WHERE name     = 'Logística'),
    (SELECT id FROM access_level    WHERE name     = 'Read')
);