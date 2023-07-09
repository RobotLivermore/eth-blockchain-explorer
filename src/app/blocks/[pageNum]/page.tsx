import BlockListView from '../BlockListView';
import { getBlocksByPage } from '@/server/getBlocksByPage';

export default async function Blocks({
  params,
}: {
  params: { pageNum: string };
}) {
  const page = Number(params.pageNum);
  if (page > 0) {
    const blocks = await getBlocksByPage();
    return <BlockListView blocks={blocks} page={params.pageNum} />;
  } else {
    return null;
  }
}
