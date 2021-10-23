INSERT INTO department (name)
VALUES
('HR'),
('Sales'),
('Customer Service'),
('Retention'),
('Marketing'),
('IT'),
('Contracting & Licensing'),
('Management');


INSERT INTO role (title, salary, department_id)
VALUES
('HR', 80000, 1),
('Sales', 40000, 2),
('Customer Service', 35000, 3),
('Retention', 35000, 4),
('Marketing', 45000, 5),
('IT', 90000, 6),
('Management', 120000, 7);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Jimmy', 'Jones', 1, 7),
  ('Joshua', 'Moleander', 2, 7),
  ('Christopher', 'Kingston', 3, 7),
  ('Charlene', 'Williams', 4, 7),
  ('Katherine', 'Mansfield', 5,7),
  ('Kyle', 'Carrington', 6, 7),
  ('Barbie', 'Bellamy', 7, null);