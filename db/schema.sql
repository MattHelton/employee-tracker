CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  INDEX dep_ref(department_id),
  CONSTRAINT fkdepartment FOREIGN KEY(department_id)REFERENCES department(id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  INDEX role_ref(role_id),
  CONSTRAINT fkrole FOREIGN KEY(role_id)REFERENCES role(id),
  manager_id INT,
  INDEX manager_ref(manager_id),
  CONSTRAINT fkmanager FOREIGN KEY(manager_id)REFERENCES employee(id)
);