import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const gymPricing = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities",
                "Unlimited use of cardio equipment",
                "Locker room access",
                "One complimentary fitness assessment",
                "Access to stretching area",
                "Discounts on gym merchandise",
                "Monthly fitness newsletter"
            ],
            "price": 29.99
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to gym facilities",
                "Unlimited use of cardio and strength equipment",
                "Locker room access with towel service",
                "Unlimited group fitness classes",
                "Two complimentary fitness assessments",
                "Personal trainer consultation",
                "Access to sauna and steam room",
                "Nutritional counseling session",
                "Access to exclusive members-only events"
            ],
            "price": 49.99
        },
        {
            "id": 3,
            "name": "Family Membership",
            "features": [
                "Access to gym facilities for two adults",
                "Unlimited use of cardio and strength equipment",
                "Locker room access with towel service",
                "Unlimited fitness classes for family members",
                "Four complimentary fitness assessments",
                "Personal trainer consultation for each adult",
                "Access to child care services",
                "Family fitness classes",
                "Discounted rates on additional child memberships"
            ],
            "price": 89.99
        }
    ];
    
    // You can now use the gymPricing variable to access the pricing information in your JavaScript code.
    
    return (
        <div className="mx-auto max-w-screen-2xl">
      <h2 className="text-5xl text-center mb-8 font-extrabold text-gray-800">
        Best Prices in Town
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        {gymPricing.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
    );
};

export default PriceOptions;