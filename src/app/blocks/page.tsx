import BlockListView from './BlockListView';
import { getBlocksByPage } from '@/server/getBlocksByPage';

export default async function Blocks() {
  const blocks = await getBlocksByPage();
  return <BlockListView blocks={blocks} />;
}
