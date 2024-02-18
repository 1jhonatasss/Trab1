const API_BASE_URL = 'http://localhost:3001';

class ClienteService{

    
    async getAllClientes(){

        try {
            const response = await fetch(`${API_BASE_URL}/cliente`)

            if(!response.ok){
                throw new Error('Erro ao buscar cliente')
            }
            const dados = await response.json();
            return dados;



        } catch (error) {
            console.error('erro ao buscar cliente:',error);
            throw error;

        }
    }

    async createCliente(clienteData) {
        try {
          console.log('Enviando dados para cadastrar cliente:', clienteData);
      
          const response = await fetch(`${API_BASE_URL}/cliente`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(clienteData),
          });
      
          const responseData = await response.json();
      
          if (!response.ok) {
            console.error('Erro ao cadastrar cliente. Status:', response.status, 'Resposta do servidor:', responseData);
            throw new Error(responseData.message || 'Erro ao cadastrar cliente');
          }
      
          console.log('Cliente cadastrado com sucesso. Resposta do servidor:', responseData);
          return responseData;
        } catch (error) {
          console.error('Erro ao cadastrar cliente:', error);
          throw error;
        }
      }
      

      async updateCliente(id, clienteData) {
        try {
          const response = await fetch(`${API_BASE_URL}/cliente/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(clienteData),
          });
      
          if (!response.ok) {
            const responseData = await response.json();
            console.error('Erro ao atualizar cliente. Status:', response.status, 'Resposta do servidor:', responseData);
            throw new Error(responseData.message || 'Erro ao atualizar cliente');
          }
      
          const responseData = await response.json();
          console.log('Cliente atualizado com sucesso. Resposta do servidor:', responseData);
          return responseData;
        } catch (error) {
          console.error('Erro ao atualizar cliente:', error);
          throw error;
        }
      }
      
      

    async deleteCliente(id){
        try{
            const response = await fetch(`${API_BASE_URL}/cliente/${id}`,{
                method: "DELETE",

            })
             if(!response.ok){
                throw new Error('ERROR AO DELETAR CLIENTE')
             }

        }catch(error){
            console.error('ERRO AO DELETAR cliente:',error);
            throw error;

        }
    }
}





export default ClienteService