import Index from '@/container/News/Detail';
import FlatList from '@/container/News/List/FlatList';
import withApollo from '@/lib/apollo';
import withLayout from '@/hoc/layout';

Index.Sider = FlatList;

export default withApollo(withLayout(Index));

