import { List, Card } from "@/components";
import { getImages } from "@/api";
import { imageModel } from "@/types";
import { useInfinityScroll } from "@/hooks/useInfinityScroll";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addImages } from "@/store/slices/images/imagesSlice";

const ListContainer = () => {
  const images = useSelector((state: RootState) => state.images.images);
  const dispatch = useDispatch();

  const ref = useInfinityScroll<imageModel>({
    limit: 10,
    setItems: (values) => dispatch(addImages(values)),
    getItems: async (page, limit) => await getImages(page, limit),
  });

  return (
    <List ref={ref}>
      {images.map((image) => (
        <Card key={image.id} image={image} />
      ))}
    </List>
  );
};

export default ListContainer;
