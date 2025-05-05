package com.groupT.Smart.Campus.Services.Portal.service.Implementation;

import com.groupT.Smart.Campus.Services.Portal.entity.Booking;
import com.groupT.Smart.Campus.Services.Portal.entity.User;
import com.groupT.Smart.Campus.Services.Portal.exception.BookingNotFoundException;
import com.groupT.Smart.Campus.Services.Portal.exception.NotFoundBookingsException;
import com.groupT.Smart.Campus.Services.Portal.repository.BookingRepository;
import com.groupT.Smart.Campus.Services.Portal.repository.UserRepository;
import com.groupT.Smart.Campus.Services.Portal.service.Interface.BookingService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;
    private final UserRepository userRepository;

    @Override
    public List<Booking> getBookingsForStudent(Principal principal) {

        User user = this.userRepository.findByUsername(principal.getName()).orElseThrow();
        List<Booking> userBookingsList = this.bookingRepository.findByUser(user);

        if (userBookingsList.isEmpty()) {
            throw new NotFoundBookingsException("No Bookings Available for the Student");
        }
        return userBookingsList;
    }

    @Override
    public void saveBooking(Booking booking, Principal principal) {
        User user = this.userRepository.findByUsername(principal.getName()).orElseThrow();
        booking.setUser(user);

        this.bookingRepository.save(booking);
    }

    @Override
    public void deleteBooking(Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new BookingNotFoundException("Booking with ID not found"));

        this.bookingRepository.delete(booking);
    }
}
