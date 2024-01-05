import axios,{AxiosResponse} from 'axios';

const QuestionApi = async() => {
    try {
        const response: AxiosResponse<any> = await axios.get('https://opentdb.com/api.php?amount=1');
        if (response.data.response_code === 0) {
          const question = response.data.results[0];
          return question;
        } else {
          return undefined;
        }
      } catch (error) {
        return undefined;
      }
}

export default QuestionApi;
