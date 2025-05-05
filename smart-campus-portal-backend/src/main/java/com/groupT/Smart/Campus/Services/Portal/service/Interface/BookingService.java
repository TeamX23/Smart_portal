package com.groupT.Smart.Campus.Services.Portal.service.Interface;

import com.groupT.Smart.Campus.Services.Portal.entity.Booking;

import java.security.Principal;
import java.util.List;

public interface BookingService {

    public List<Booking> getBookingsForStudent(Principal principal);
    public void saveBooking(Booking booking, Principal principal);
    public void deleteBooking(Long id);
}
