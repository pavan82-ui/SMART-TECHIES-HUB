

export function Productcard({product}) {

    return (
        <div className="card">
            <div className="card-title">
                {product.name}
            </div>
            <div className="card-body">
                {product.description}
            </div>
            <div className="card-footer">
                ${product.price.toFixed(2)}
            </div>
        </div>

    )   
            

    
}
