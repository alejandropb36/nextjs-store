interface CategoryProps {
    params: {
        category: string;
    }
}

export default function CategoryPage(props: CategoryProps) {
    const {category} = props.params;
    return (
        <h1>Categoria: {category}</h1>
    )
}