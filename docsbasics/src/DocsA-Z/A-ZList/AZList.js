import * as React from 'react';
import './AZList.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

class AZPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }


    componentDidMount() {
        fetch("https://docops-test.s3.us-east-2.amazonaws.com/allprods.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.ProductDetails.productInfo.documentation
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        console.log(this.type);
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <>
                    <Renderbanner />
                    <h1>Browse all of Micro Focus's <br /> products</h1>
                    <div className='prodListContainer'>
                        {items.map(item => (
                            item.type === 'Product' && (this.renderProducts(item))
                            // || item.type == 'Content' && ( this.renderContents(item))
                        ))}
                    </div>
                    <br /><br />
                    <h1>Browse all of Micro Focus's <br /> add-ons</h1>
                    <div className='prodListContainer'>
                        {items.map(item => (
                            item.type === 'Content' && (this.renderContents(item))
                        ))}
                    </div>
                </>
            );
        }
    }


    renderProducts(item) {
        return (
            <div className='listItem' key={item.prod_id}>
                {item.name} {item.type}
            </div>
        )
    }

    renderContents(item) {
        return (
            <div className='listItem' key={item.prod_id}>
                {item.name} {item.type}
            </div>
        )
    }
}

export default AZPage;

function Renderbanner() {
    const [type, setType] = React.useState('');

    const handleChange = (event) => {
        setType(event.target.value);
    };
    return (
        <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
            <InputLabel id="demo-select-small">Filter by product type</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={type}
                label="Filter by product type"
                onChange={handleChange}
            >
                <MenuItem value={1}>Product</MenuItem>
                <MenuItem value={2}>Add-ons</MenuItem>
                <MenuItem value={3}>Internal</MenuItem>
                <MenuItem value={4}>Third Party Products</MenuItem>
            </Select>
        </FormControl>
    )
}