import { useMutation } from 'react-query';
import createSubscription from '../api/payment/createSubscription'

const useCreateSubscription = (amount, firstName, lastName, donorEmail) => {
    const mutation = useMutation(() => createSubscription(amount, firstName, lastName, donorEmail));
    return mutation;
}

export default useCreateSubscription;