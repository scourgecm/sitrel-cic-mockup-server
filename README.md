# sitrel-cic-mockup-server

## API

### **GET** /connect/_:agent_/_:pass_/_:station_/_:host_

Agrega una sesión del agente al discador

### **GET** /disconnect/_:agent_

Quita la sesión del agente

### **GET** /campaing/list/_:agent_

Lista las campañas para el agente. En el mockup, lista los códigos en _mockup-data.js_.