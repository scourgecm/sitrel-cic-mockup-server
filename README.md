# sitrel-cic-mockup-server

## API

### **GET** /connect/_:agent_/_:pass_/_:station_/_:host_

Agrega una sesión del agente al discador.

### **GET** /disconnect/_:agent_

Quita la sesión del agente.

### **GET** /status/_:agent_

Obtiene el status del agente.

### **GET** /campaing/list/_:agent_

Lista las campañas para el agente. En el mockup, lista los códigos en _mockup-data.js_.

### **GET** /campaing/login/_:agent_/_:campaing_

Conecta el agente a la campaña.

### **GET** /campaing/logout/_:agent_/_:campaing_

Desconecta el agente a la campaña.

### **GET** /campaing/disposition/_:agent_/_:code_

Marca el termino de una llamada activa para el agente, con el código indicado.

### **GET** /break/_:agent_
### **GET** /endbreak/_:agent_
### **GET** /statusList/_:agent_
### **GET** /status/update/_:agent_/_:status_