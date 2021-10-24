INSERT INTO department (name)
VALUES
('HR'),
('Sales'),
('Retention'),
('Marketing'),
('IT'),
('Contracting & Licensing'),
('Management');


INSERT INTO role (title, salary, department_id)
VALUES
('HR Specialist', 80000, 1),
('Sales Representative', 40000, 2),
('Retention Specialist', 35000, 3),
('Marketing Specialist', 45000, 4),
('Analyst', 90000, 5),
('Management', 120000, 6);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jimmy', 'Jones', 1, 6),
('Joshua', 'Moleander', 2, 6),
('Christopher', 'Kingston', 3, 6),
('Charlene', 'Williams', 4, 6),
('Katherine', 'Mansfield', 5, 6),
('Kyle', 'Carrington', 6, null),
('Barbie', 'Bellamy', 6, null);