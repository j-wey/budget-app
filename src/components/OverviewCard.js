import { useEffect, useState } from "react"
import {
    Card,
    CardBody,
    CardHeader,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap"
import NetWorth from "../features/overviews/NetWorth"
import TotalAssets from "../features/overviews/TotalAssets"
import TotalLiabilities from "../features/overviews/TotalLiabilities"

const OverviewCard = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [dropOption, setDropOption] = useState("Net Worth")

    const toggle = () => setDropdownOpen((prevState) => !prevState)

    return (
        <Card>
            <CardHeader>
                <Dropdown
                    isOpen={dropdownOpen}
                    toggle={toggle}
                    direction='down'
                >
                    <DropdownToggle>
                        {dropOption} <i className='fa fa-solid fa-angle-down' />
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem
                            onClick={(e) => {
                                setDropOption(e.target.textContent)
                            }}
                        >
                            Net Worth
                        </DropdownItem>
                        <DropdownItem
                            onClick={(e) => {
                                setDropOption(e.target.textContent)
                            }}
                        >
                            Total Assets
                        </DropdownItem>
                        <DropdownItem
                            onClick={(e) => {
                                setDropOption(e.target.textContent)
                            }}
                        >
                            Total Liabilities
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </CardHeader>
            <CardBody>
                {(() => {
                    switch (dropOption) {
                        case 'Total Assets':
                            return <TotalAssets />
                            break
                        case 'Total Liabilities':
                            return <TotalLiabilities />
                            break
                        default:
                            return <NetWorth />
                    }
                })()}
            </CardBody>
        </Card>
    )
}

export default OverviewCard
