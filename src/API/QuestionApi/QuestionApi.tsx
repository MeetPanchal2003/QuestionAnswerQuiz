import axios,{AxiosResponse} from 'axios';

const QuestionApi = async() => {
    try {
        try {
            const response: AxiosResponse<any> = await axios.get('https://opentdb.com/api.php?amount=1');
            
            if (response.data.response_code === 0) {
              console.log(response)
              const question = response.data.results[0];
              return question;
            } else {
              console.error('API error:', response.data);
              return undefined;
            }
          } catch (error) {
            console.error('Error:', error);
            return undefined;
          }
        
    } catch (error) {
        console.log("Error: ",error)
    }
}

export default QuestionApi;
