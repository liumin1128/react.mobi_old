import Setting from '@/container/User/Setting';
import { withApollo } from '@/lib/apollo';
import withLayout from '@/hoc/layout';

export default withApollo(withLayout(Setting));
