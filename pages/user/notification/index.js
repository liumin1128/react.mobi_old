import Notification from '@/container/User/Notification';
import withApollo from '@/lib/apollo';
import withLayout from '@/hoc/layout';

export default withApollo(withLayout(Notification));
