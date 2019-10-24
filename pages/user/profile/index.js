import Index from '@/container/User/Profile';
import withApollo from '@/lib/apollo';
import withLayout from '@/hoc/layout';

export default withApollo(withLayout(Index));
