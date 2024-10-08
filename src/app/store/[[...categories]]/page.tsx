interface CategoryProps {
    params: {
        categories: string[];
    },
    searchParams?: any;
}

export default function CategoryPage(props: CategoryProps) {
    const {categories} = props.params;
    props.searchParams;
    return (
        <h1>Categoria: {categories}</h1>
    )
}