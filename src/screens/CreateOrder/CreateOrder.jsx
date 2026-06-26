import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import {
    getAddresses,
    createAddress,
} from "../../common/api/addressService";

import {
    Container,
    Stepper,
    Step,
    StepLabel,
    Typography,
    Button,
    Box,
    Grid,
    Paper,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField,
    MenuItem,
} from "@mui/material";

export default function CreateOrder() {
    const location = useLocation();

    const { product, quantity } = location.state;

    const [activeStep, setActiveStep] = useState(0);

    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState("");

    const [addressForm, setAddressForm] = useState({
        name: "",
        contactNumber: "",
        street: "",
        city: "",
        state: "",
        landmark: "",
        zipcode: "",
    });

    useEffect(() => {
        fetchAddresses();
    }, []);
const handleInputChange = (e) => {
  const { name, value } = e.target;

  setAddressForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};
    const fetchAddresses = async () => {
        try {
            const response = await getAddresses();
            console.log("Addresses:", response.data);
            setAddresses(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSaveAddress = async () => {
        try {
            const response = await createAddress(addressForm);

            console.log("Address Created:", response.data);

            alert("Address Added Successfully!");

            fetchAddresses();

            setAddressForm({
                name: "",
                contactNumber: "",
                street: "",
                city: "",
                state: "",
                landmark: "",
                zipcode: "",
            });

        } catch (error) {
            console.log(error);

            alert("Unable to save address.");
        }
    };

    const states = [
        "Andhra Pradesh",
        "Karnataka",
        "Kerala",
        "Tamil Nadu",
        "Telangana",
        "Maharashtra",
        "Delhi",
    ];

    const steps = [
        "Items",
        "Select Address",
        "Confirm Order",
    ];

    const handleNext = () => {
        if (activeStep < 2) {
            setActiveStep((prev) => prev + 1);
        } else {
            alert("Order Placed Successfully!");
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prev) => prev - 1);
        }
    };

    return (
        <>
            <Header />

            <Container sx={{ mt: 5 }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {/* STEP 1 */}

                {activeStep === 0 && (
                    <Box sx={{ mt: 5 }}>
                        <Typography variant="h5">
                            Product : {product.name}
                        </Typography>

                        <Typography sx={{ mt: 1 }}>
                            Quantity : {quantity}
                        </Typography>

                        <Typography sx={{ mt: 1 }}>
                            Total : ₹ {product.price * quantity}
                        </Typography>
                    </Box>
                )}

                {/* STEP 2 */}

                {activeStep === 1 && (
                    <Grid container spacing={4} sx={{ mt: 3 }}>
                        {/* Address List */}

                        <Grid item xs={12} md={5}>
                            <Typography variant="h6">
                                Select Address
                            </Typography>

                            <Paper sx={{ mt: 2, p: 2 }}>
                                <RadioGroup
                                    value={selectedAddress}
                                    onChange={(e) =>
                                        setSelectedAddress(e.target.value)
                                    }
                                >
                                    {/* Temporary Sample Address */}

                                    <FormControlLabel
                                        value="1"
                                        control={<Radio />}
                                        label={
                                            <>
                                                <Typography fontWeight="bold">
                                                    Home
                                                </Typography>

                                                <Typography variant="body2">
                                                    Hyderabad
                                                </Typography>

                                                <Typography variant="body2">
                                                    Telangana
                                                </Typography>

                                                <Typography variant="body2">
                                                    500081
                                                </Typography>
                                            </>
                                        }
                                    />

                                    {/* Uncomment after authentication issue is fixed */}

                                    {/*
                  {addresses.map((address) => (
                    <FormControlLabel
                      key={address.id}
                      value={address.id}
                      control={<Radio />}
                      label={
                        <>
                          <Typography fontWeight="bold">
                            {address.name}
                          </Typography>

                          <Typography variant="body2">
                            {address.street}
                          </Typography>

                          <Typography variant="body2">
                            {address.city}
                          </Typography>

                          <Typography variant="body2">
                            {address.state}
                          </Typography>

                          <Typography variant="body2">
                            {address.zipcode}
                          </Typography>
                        </>
                      }
                    />
                  ))}
                  */}
                                </RadioGroup>
                            </Paper>
                        </Grid>

                        {/* Add Address */}

                        <Grid item xs={12} md={7}>
                            <Typography variant="h6">
                                Add Address
                            </Typography>

                            <Paper sx={{ mt: 2, p: 3 }}>
                                <TextField
                                    fullWidth
                                    name="name"
                                    label="Name"
                                    margin="normal"
                                    value={addressForm.name}
                                    onChange={handleInputChange}
                                />

                                <TextField
                                    fullWidth
                                    name="contactNumber"
                                    label="Contact Number"
                                    margin="normal"
                                    value={addressForm.contactNumber}
                                    onChange={handleInputChange}
                                />

                                <TextField
                                    fullWidth
                                    name="street"
                                    label="Street"
                                    margin="normal"
                                    value={addressForm.street}
                                    onChange={handleInputChange}
                                />

                                <TextField
                                    fullWidth
                                    name="city"
                                    label="City"
                                    margin="normal"
                                    value={addressForm.city}
                                    onChange={handleInputChange}
                                />

                                <TextField
                                    select
                                    fullWidth
                                    name="state"
                                    label="State"
                                    margin="normal"
                                    value={addressForm.state}
                                    onChange={handleInputChange}
                                >
                                    {states.map((state) => (
                                        <MenuItem key={state} value={state}>
                                            {state}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    fullWidth
                                    name="landmark"
                                    label="Landmark"
                                    margin="normal"
                                    value={addressForm.landmark}
                                    onChange={handleInputChange}
                                />

                                <TextField
                                    fullWidth
                                    name="zipcode"
                                    label="Zip Code"
                                    margin="normal"
                                    value={addressForm.zipcode}
                                    onChange={handleInputChange}
                                />

                                <Button
                                    variant="contained"
                                    sx={{ mt: 2 }}
                                    onClick={handleSaveAddress}
                                >
                                    SAVE ADDRESS
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                )}

                {/* STEP 3 */}

                {activeStep === 2 && (
                    <Box sx={{ mt: 5 }}>
                        <Typography variant="h5">
                            Confirm Order
                        </Typography>

                        <Typography sx={{ mt: 2 }}>
                            <strong>Product:</strong> {product.name}
                        </Typography>

                        <Typography>
                            <strong>Quantity:</strong> {quantity}
                        </Typography>

                        <Typography>
                            <strong>Total:</strong> ₹ {product.price * quantity}
                        </Typography>
                    </Box>
                )}

                <Box
                    sx={{
                        mt: 5,
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                        Back
                    </Button>

                    <Button
                        variant="contained"
                        onClick={handleNext}
                    >
                        {activeStep === 2 ? "PLACE ORDER" : "Next"}
                    </Button>
                </Box>
            </Container>
        </>
    );
}